package com.example.springapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "age")
    private int age;
    @Column(name = "point")
    private Double point;
    public Student() {
    }
    public Student(String name, int age, Double point) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
    public Student(int id, String name, int age, Double point) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.point = point;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public Double getPoint() {
        return point;
    }
    public void setPoint(Double point) {
        this.point = point;
    }
    
}
