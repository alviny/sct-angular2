package com.sct.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sct.web.data.service.PurchaseItemDataService;
import com.sct.web.model.PurchaseItem;

@RestController
@CrossOrigin()
public class PurchaseItemController {
	@Autowired
	private PurchaseItemDataService service;
	
	@RequestMapping(value = "/purchase/item", method = RequestMethod.GET)
	public @ResponseBody List<PurchaseItem> getItems(){
		List<PurchaseItem> items = service.getPurchaseItems();
		return items;
	}
}
