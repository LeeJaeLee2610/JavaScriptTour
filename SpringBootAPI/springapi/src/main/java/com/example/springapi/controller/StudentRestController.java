package com.example.springapi.controller;

import java.util.List;
import java.util.Optional;

import com.example.springapi.model.Student;
import com.example.springapi.repositories.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentRestController {
    @Autowired
    private StudentRepository studentRepository;
    @GetMapping("/getStudent")
    public List<Student> getAllStudents(){
        List<Student> listS = studentRepository.findAll();
        return listS;
    }
    @GetMapping("/getStudentSid")
    public Optional<Student> getStudentById(){
        return studentRepository.findById(1);
    }
}
