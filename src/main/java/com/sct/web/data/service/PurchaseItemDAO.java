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
		List<PurchaseItem> items = template.query("SELECT * FROM purchase_item",new BeanPropertyRowMapper<PurchaseItem>(PurchaseItem.class));
		return items;
	}
}
