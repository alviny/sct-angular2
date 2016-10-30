package com.sct.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sct.web.model.PurchaseItem;

@RestController
@CrossOrigin()
public class PurchaseItemController {
	@RequestMapping(value = "/purchase/item", method = RequestMethod.GET)
	public @ResponseBody List<PurchaseItem> getItems(){
		List<PurchaseItem> items = new ArrayList<PurchaseItem>();
		items.add(new PurchaseItem("10-10-2016","MacBook", "1230.00"));
		return items;
	}
}
