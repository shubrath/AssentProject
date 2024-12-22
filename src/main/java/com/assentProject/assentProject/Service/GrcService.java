package com.assentProject.assentProject.Service;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assentProject.assentProject.Entity.Organization;
import com.assentProject.assentProject.Entity.OrganizationProductMapping;
import com.assentProject.assentProject.Entity.Product;
import com.assentProject.assentProject.Repositories.OrganizationProductMappingRepository;
import com.assentProject.assentProject.Repositories.OrganizationRepository;
import com.assentProject.assentProject.Repositories.ProductRepository;

import org.springframework.stereotype.Service;
import org.springframework.stereotype.Controller;

import java.util.List;

@Service
public class GrcService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrganizationRepository organizationRepository;

    @Autowired
    private OrganizationProductMappingRepository mappingRepository;

    // Product Methods
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    // Organization Methods
    public List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }

    public Organization saveOrganization(Organization organization) {
        return organizationRepository.save(organization);
    }

    // Mapping Methods
    public List<OrganizationProductMapping> getAllMappings() {
        return mappingRepository.findAll();
    }

    public OrganizationProductMapping saveMapping(OrganizationProductMapping mapping) {
        return mappingRepository.save(mapping);
    }
}
