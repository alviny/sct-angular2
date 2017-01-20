package com.sct.web.data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sct.web.model.Category;


@Service("categoryDataService")
@Transactional
public class CategoryDataService {
	@Autowired
	private CategoryDAO dao;
	
	public List<Category> getCategories(){
		return dao.getCategories();
	}
}
