package com.sct.web.model;

import java.util.Date;

public class PurchaseItem {
	private Date purchaseDate;
	private String description;
	private Double price;
	public PurchaseItem() {
		// TODO Auto-generated constructor stub
	}
	public PurchaseItem(Date purchaseDate, String description, Double price) {
		this.purchaseDate = purchaseDate;
		this.description = description;
		this.price = price;
	}	
	public Date getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}

}
