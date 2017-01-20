package com.sct.web.data.service;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.sct.web.model.Category;
@Repository
public class CategoryDAO {
	@Autowired
	private DataSource dataSource;

	public List<Category> getCategories(){
		JdbcTemplate template = new JdbcTemplate(dataSource);
		List<Category> items = template.query("SELECT * FROM category",new BeanPropertyRowMapper<Category>(Category.class));
		return items;
	}
}
