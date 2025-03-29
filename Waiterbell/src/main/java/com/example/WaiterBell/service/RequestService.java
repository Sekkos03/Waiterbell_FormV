package com.example.WaiterBell.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.WaiterBell.model.Request;
import com.example.WaiterBell.repository.RequestRepository;

@Service
public class RequestService {

    @Autowired
    private RequestRepository repository;

    public void addRequest(Request request) {
        repository.save(request);
    }

}
