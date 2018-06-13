package com.licenta2018.backend.domain.model.user;

import static javax.persistence.GenerationType.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "USERS", uniqueConstraints={@UniqueConstraint(columnNames = {"email"})})
public abstract class AppUser {

    @Id
    @GeneratedValue(strategy = SEQUENCE)
    private long id;

    @Column
    @NotNull(message = "First name cannot be null")
    private String firstName;

    @Column
    @NotNull(message = "Last name cannot be null")
    private String lastName;

    @Column
    @NotNull(message = "Email cannot be null")
    @Email
    private String email;

    @Column
    @NotNull(message = "Email cannot be null")
    private String address;

    @Column
    @NotNull(message = "phone number cannot be null")
    private String phoneNumber;

    @NotNull(message = "AppUser details cannot be null")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "user_systemDetails", joinColumns = @JoinColumn(name = "users_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "SystemUserDetails_id", referencedColumnName = "id"))
    private SystemUserDetails systemUserDetails;

    @Column
    @NotNull(message = "Role cannot be null")
    private String role;

    public String getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    public SystemUserDetails getSystemUserDetails() {
        return systemUserDetails;
    }
}
