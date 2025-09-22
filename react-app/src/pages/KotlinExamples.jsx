function KotlinExamples() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Kotlin 예제</h1>
      
      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">기본 Kotlin Spring Boot 프로젝트</h2>
          <p className="text-gray-600 mb-4">
            Kotlin 언어로 작성된 Spring Boot 애플리케이션 예제입니다.
          </p>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">build.gradle.kts</h3>
            <div className="code-block">
              <pre>{`plugins {
    id("org.springframework.boot") version "3.1.0"
    id("io.spring.dependency-management") version "1.1.0"
    kotlin("jvm") version "1.8.21"
    kotlin("plugin.spring") version "1.8.21"
    kotlin("plugin.jpa") version "1.8.21"
}

group = "com.springhub.example"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    
    runtimeOnly("com.h2database:h2")
    
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}`}</pre>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Kotlin Controller 예제</h2>
          <div className="code-block">
            <pre>{`@RestController
@RequestMapping("/api/products")
class ProductController(
    private val productService: ProductService
) {
    
    @GetMapping
    fun getAllProducts(): List<Product> = productService.findAll()
    
    @GetMapping("/{id}")
    fun getProductById(@PathVariable id: Long): ResponseEntity<Product> {
        val product = productService.findById(id)
        return if (product != null) {
            ResponseEntity.ok(product)
        } else {
            ResponseEntity.notFound().build()
        }
    }
    
    @PostMapping
    fun createProduct(@Valid @RequestBody product: Product): Product =
        productService.save(product)
    
    @PutMapping("/{id}")
    fun updateProduct(
        @PathVariable id: Long,
        @Valid @RequestBody product: Product
    ): ResponseEntity<Product> {
        val updatedProduct = productService.update(id, product)
        return if (updatedProduct != null) {
            ResponseEntity.ok(updatedProduct)
        } else {
            ResponseEntity.notFound().build()
        }
    }
    
    @DeleteMapping("/{id}")
    fun deleteProduct(@PathVariable id: Long): ResponseEntity<Void> {
        val deleted = productService.delete(id)
        return if (deleted) {
            ResponseEntity.noContent().build()
        } else {
            ResponseEntity.notFound().build()
        }
    }
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KotlinExamples