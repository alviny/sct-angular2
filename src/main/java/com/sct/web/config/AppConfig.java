package com.sct.web.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@ComponentScan(basePackages = "com.sct.web")
class AppConfig {
	
	@Bean
	public DataSource dataSource(){
		DriverManagerDataSource ds = new DriverManagerDataSource("jdbc:mysql://localhost:3306/sct","sct-web","sct-web");
		ds.setDriverClassName("com.mysql.jdbc.Driver");
		return ds;
	}
}