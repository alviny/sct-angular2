package com.sct.web.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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
		Calendar cal = Calendar.getInstance();
		items.add(new PurchaseItem(cal.getTime(),"MacBook", new Double("1230.00")));
		return items;
	}
}
