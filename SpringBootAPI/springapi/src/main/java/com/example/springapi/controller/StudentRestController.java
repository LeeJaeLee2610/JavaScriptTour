package com.example.springapi.controller;

import java.util.List;
import java.util.Optional;

import com.example.springapi.model.Student;
import com.example.springapi.repositories.StudentRepository;
import com.example.springapi.services.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/rest")
public class StudentRestController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/getStudents")
    public List<Student> getAllStudents(){
        List<Student> listS = studentService.getAllStudents();
        return listS;
    }

    @PostMapping("/addStudent")
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }

    @PutMapping("/updateStudent/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Integer id, @RequestBody Student student) {
        //TODO: process PUT request
        try{
            Student updateStudent = studentRepository.findById(id)
                .map(stu -> {
                    stu.setName(student.getName());
                    stu.setAge(student.getAge());
                    stu.setPoint(student.getPoint());
                    return studentRepository.save(stu);
                }).orElseGet(() -> {
                    student.setId(id);
                    return studentRepository.save(student);
                });
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteStudent/{id}")
    public void delete(@PathVariable Integer id){
        studentService.deleteStudent(id);
    }
}
