package com.example.application.model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

public class User {

    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @Positive
    private int age;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }

}
