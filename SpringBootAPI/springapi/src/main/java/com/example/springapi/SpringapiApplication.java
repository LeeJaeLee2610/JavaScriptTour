package com.example.springapi;

import java.util.List;

import com.example.springapi.model.Student;
import com.example.springapi.repositories.StudentRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringapiApplication implements CommandLineRunner{
	@Autowired
	private StudentRepository studentRepository;
	private static final Logger logger = LoggerFactory.getLogger(SpringApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringapiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		List<Student> listS = studentRepository.findAll();
		for(Student s:listS){
			logger.info(s.getId() + " " + s.getName() + " " + s.getAge() + " " + s.getPoint());
		}
	}
}
