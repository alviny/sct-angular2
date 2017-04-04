package com.sct.web.data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sct.web.model.PurchaseItem;


@Service("purchaseItemDataService")
@Transactional
public class PurchaseItemDataService {
	@Autowired
	private PurchaseItemDAO dao;
	
	public List<PurchaseItem> getPurchaseItems(){
		return dao.getPurchaseItems();
	}
	public PurchaseItem getPurchaseItem(String referenceId){
		return dao.getPurchaseItem(referenceId);
	}
	public void updatePurchaseItem(String referenceId, String newCategory){
		dao.updatePurchaseItem(referenceId, newCategory);
	}
}
