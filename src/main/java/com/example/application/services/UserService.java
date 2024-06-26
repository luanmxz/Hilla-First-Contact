package com.example.application.services;

import org.springframework.stereotype.Service;

import com.example.application.model.User;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

@BrowserCallable
@AnonymousAllowed
@Service
public class UserService {

    public User createAndRetrieveUser(User user) {
        User newUser = new User(user.getName(), user.getAge());
        return newUser;
    }
}
