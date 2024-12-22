package com.assentProject.assentProject.Entity;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Controller;

import java.util.List;


@Entity
@Table(name = "organizations")
public class Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int organizationId;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false)
    private int superAdminId;

    @Column(nullable = false)
    private int adminId;

    // Getters and Setters
    public int getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(int organizationId) {
        this.organizationId = organizationId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSuperAdminId() {
        return superAdminId;
    }

    public void setSuperAdminId(int superAdminId) {
        this.superAdminId = superAdminId;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }
}

