package com.example.fapi.database;

import com.example.fapi.model.Product;
import com.example.fapi.repositories.ProductRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Database {
    private static final Logger logger = LoggerFactory.getLogger(Database.class);

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository){
        return new CommandLineRunner() {

            @Override
            public void run(String... args) throws Exception {
                // TODO Auto-generated method stub
                Product pA = new Product("iphone 9", "Dien thoai xin");
                Product pB = new Product("iphone 10", "Dien thoai ko xin");
                // Hàm save sẽ lưu 2 bản ghi vào db
                logger.info("insert data: " + productRepository.save(pA));
                logger.info("insert data: " + productRepository.save(pB));
            }
            
        };
    }
}
