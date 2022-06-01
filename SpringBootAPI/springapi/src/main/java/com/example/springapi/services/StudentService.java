package com.example.springapi.services;

import java.util.List;

import javax.transaction.Transactional;

import com.example.springapi.model.Student;
import com.example.springapi.repositories.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents(){
        List<Student> listS = studentRepository.findAll();
        return listS;
    }

    public void getStudentById(Integer id){
        studentRepository.findById(id);
    }

    public void addStudent(Student student){
        studentRepository.save(student);
    }

    public void deleteStudent(Integer id){
        studentRepository.deleteById(id);
    }
}
