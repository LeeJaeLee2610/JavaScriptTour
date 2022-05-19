package com.example.fapi.controller;

import java.util.List;
import java.util.Optional;

import com.example.fapi.model.Product;
import com.example.fapi.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/Products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("")
    List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    Optional<Product> findById(@PathVariable Integer id){
        Optional <Product> foundProduct = productRepository.findById(id);
        return foundProduct;
    }

    @PostMapping("/insert")
    Product insertProduct(@RequestBody Product newProduct){
        return productRepository.save(newProduct);
    }
}
