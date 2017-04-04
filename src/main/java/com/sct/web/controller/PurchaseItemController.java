package com.sct.web.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	private static final Logger logger = Logger.getLogger(PurchaseItemController.class);
	@RequestMapping(value = "/purchase/item", method = RequestMethod.GET)
	public @ResponseBody List<PurchaseItem> getItems(){
		logger.info("get all purchased items");
		List<PurchaseItem> items = service.getPurchaseItems();
		return items;
	}
	@RequestMapping(value = "/purchase/item/{reference}", method = RequestMethod.GET)
	public @ResponseBody PurchaseItem getItem(@PathVariable String reference){
		logger.info("get purchased item :" + reference);
		PurchaseItem item = service.getPurchaseItem(reference);
		return item;
	}
	@RequestMapping( value= "/purchase/item/{referenceId}", method = RequestMethod.POST)
	public void updatePurchaseItem(@PathVariable String referenceId, @RequestBody PurchaseItem item){
		logger.info("reference:" + referenceId + ", newCategory:" + item.getCategoryName());
		service.updatePurchaseItem(referenceId, item.getCategoryName());
	}
}
