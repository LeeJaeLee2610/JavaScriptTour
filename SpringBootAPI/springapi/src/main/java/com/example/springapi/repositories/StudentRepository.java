package com.example.springapi.repositories;

import com.example.springapi.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends JpaRepository<Student, Integer>{
    // @Query(value = "select * from student where id = :id", nativeQuery = true)
    // Student findById1(@Param("id") Integer id);
}
