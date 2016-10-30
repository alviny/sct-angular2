package com.sct.web.model;

public class PurchaseItem {
	private String purchaseDate;
	private String description;
	private String price;
	public PurchaseItem() {
		// TODO Auto-generated constructor stub
	}
	public PurchaseItem(String purchaseDate, String description, String price) {
		this.purchaseDate = purchaseDate;
		this.description = description;
		this.price = price;
	}	
	public String getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

}
