package com.example.springapi.controller;

import java.util.List;

import com.example.springapi.model.Student;
import com.example.springapi.repositories.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/index")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    
    @GetMapping()
    public String home(){
        return "/index";
    }
}
