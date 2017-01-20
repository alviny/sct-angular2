package com.sct.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sct.web.data.service.CategoryDataService;
import com.sct.web.model.Category;

@RestController
@CrossOrigin()
public class CategoryController {
	@Autowired
	private CategoryDataService service;
	
	@RequestMapping(value = "/category", method = RequestMethod.GET)
	public @ResponseBody List<Category> getCategories(){
		List<Category> items = service.getCategories();
		return items;
	}
}
