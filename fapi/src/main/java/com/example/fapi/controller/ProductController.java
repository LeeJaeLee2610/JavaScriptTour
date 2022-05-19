package com.example.fapi.controller;

import java.util.List;

import com.example.fapi.model.Product;
import com.example.fapi.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/Products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
