package com.assentProject.assentProject.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assentProject.assentProject.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {}
