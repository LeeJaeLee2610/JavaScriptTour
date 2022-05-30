package com.example.springapi.controller;

import java.util.List;

import com.example.springapi.model.Student;
import com.example.springapi.repositories.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public String allStudent(Model model){
        List<Student> listS = studentRepository.findAll();
        model.addAttribute("listS", listS);
        return "students";
    }

    @PostMapping("/students")
    public String addStudent(@ModelAttribute("student") Student student){
        studentRepository.save(student);
        return "students";
    }
}
