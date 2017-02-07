package com.sct.web.model;

import java.util.Date;

public class PurchaseItem {
	private String referenceId;
	private Date transDate;
	private Date postDate;
	private String description;
	private Double amount;
	public String getReferenceId() {
		return referenceId;
	}
	public void setReferenceId(String referenceId) {
		this.referenceId = referenceId;
	}
	public Date getTransDate() {
		return transDate;
	}
	public void setTransDate(Date transDate) {
		this.transDate = transDate;
	}
	public Date getPostDate() {
		return postDate;
	}
	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	private String categoryName;
	public PurchaseItem() {
		// TODO Auto-generated constructor stub
	}
	public PurchaseItem(Date transDate, String description, Double amount) {
		this.transDate = transDate;
		this.description = description;
		this.amount = amount;
	}	

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}

}
