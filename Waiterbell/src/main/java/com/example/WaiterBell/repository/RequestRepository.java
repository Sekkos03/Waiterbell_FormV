package com.example.WaiterBell.repository;

import org.springframework.stereotype.Repository;

import com.example.WaiterBell.model.Request;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {
    
}
