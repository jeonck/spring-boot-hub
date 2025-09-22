package com.springhub.example.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * 제품 엔티티
 *
 * JPA와 Bean Validation을 활용한 엔티티 설계 예제입니다.
 * Maven 프로젝트에서의 Spring Boot 데이터 처리 방법을 보여줍니다.
 */
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "제품명은 필수입니다")
    @Size(min = 2, max = 100, message = "제품명은 2-100자 사이여야 합니다")
    @Column(nullable = false, length = 100)
    private String name;

    @Size(max = 500, message = "설명은 500자를 초과할 수 없습니다")
    @Column(length = 500)
    private String description;

    @NotNull(message = "가격은 필수입니다")
    @DecimalMin(value = "0.0", inclusive = false, message = "가격은 0보다 커야 합니다")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @NotNull(message = "재고 수량은 필수입니다")
    @Column(nullable = false)
    private Integer stockQuantity;

    @Size(max = 50, message = "카테고리는 50자를 초과할 수 없습니다")
    @Column(length = 50)
    private String category;

    @Column(nullable = false)
    private Boolean available = true;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // 기본 생성자
    protected Product() {}

    // 생성자
    public Product(String name, String description, BigDecimal price, Integer stockQuantity) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public Product(String name, String description, BigDecimal price, Integer stockQuantity, String category) {
        this(name, description, price, stockQuantity);
        this.category = category;
    }

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // 비즈니스 메서드
    public void updateStock(Integer quantity) {
        if (quantity < 0) {
            throw new IllegalArgumentException("재고 수량은 0 이상이어야 합니다");
        }
        this.stockQuantity = quantity;
        this.available = quantity > 0;
    }

    public void increaseStock(Integer quantity) {
        if (quantity <= 0) {
            throw new IllegalArgumentException("증가할 재고 수량은 0보다 커야 합니다");
        }
        this.stockQuantity += quantity;
        this.available = true;
    }

    public void decreaseStock(Integer quantity) {
        if (quantity <= 0) {
            throw new IllegalArgumentException("감소할 재고 수량은 0보다 커야 합니다");
        }
        if (this.stockQuantity < quantity) {
            throw new IllegalArgumentException("재고가 부족합니다");
        }
        this.stockQuantity -= quantity;
        this.available = this.stockQuantity > 0;
    }

    public boolean isOutOfStock() {
        return stockQuantity <= 0;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", stockQuantity=" + stockQuantity +
                ", category='" + category + '\'' +
                ", available=" + available +
                '}';
    }
}