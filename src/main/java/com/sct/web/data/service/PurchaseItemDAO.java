package com.sct.web.data.service;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.sct.web.model.PurchaseItem;
@Repository
public class PurchaseItemDAO {
	@Autowired
	private DataSource dataSource;

	public List<PurchaseItem> getPurchaseItems(){
		JdbcTemplate template = new JdbcTemplate(dataSource);
		List<PurchaseItem> items = template.query("select p.*, c.type as category_name from purchase_item p left outer join category as c on p.category_id=c.id",new BeanPropertyRowMapper<PurchaseItem>(PurchaseItem.class));
		return items;
	}
	public PurchaseItem getPurchaseItem(String referenceId){
		JdbcTemplate template = new JdbcTemplate(dataSource);
		PurchaseItem item = template.queryForObject("select p.*, c.type as category_name from purchase_item p left outer join category as c on p.category_id=c.id and p.reference_id=?",new Object[]{referenceId}, new BeanPropertyRowMapper<PurchaseItem>(PurchaseItem.class) );
		return item;
	}
	public void updatePurchaseItem(String referenceId, String newCategory){
		JdbcTemplate template = new JdbcTemplate(dataSource);
		template.update("UPDATE purchase_item p SET p.category_id=(SELECT id FROM category c WHERE c.type=?) WHERE p.reference_id=?", newCategory, referenceId);
	}
}
