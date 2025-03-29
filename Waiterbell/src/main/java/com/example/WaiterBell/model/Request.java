package com.example.WaiterBell.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "request") 
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; 
    @Column(name = "resturant_name")
    private String resturantName;
    @Column(name = "num_tables")
    private Integer numTables;
    @Column(name = "num_bells")
    private Integer numBells;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;

    public Integer getId() {
        return id;
    }

    public String getResturantName() {
        return resturantName;
    }

    public Integer getNumTables() {
        return numTables;
    }

    public Integer getNumBells() {
        return numBells;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    // Setters
    public void setId(Integer id) {
        this.id = id;
    }
    public void setResturantName(String resturantName) {
        this.resturantName = resturantName;
    }

    public void setNumTables(Integer numTables) {
        this.numTables = numTables;
    }

    public void setNumBells(Integer numBells) {
        this.numBells = numBells;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
        public String toString() {
            return "Request{" +
                    "resturantName=" + resturantName +'\''+
                    ",numTables=" + numTables +
                    ", numBells=" + numBells +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", email='" + email + '\'' +
                    ", phone='" + phone + '\'' +
                    '}';
        }
    
}
