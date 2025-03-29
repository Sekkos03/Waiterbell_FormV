FROM eclipse-temurin:17-jdk

WORKDIR /app

# Kopier alt fra prosjektets rot (der pom.xml og mvnw ligger)
COPY . .

# Bygg prosjektet
RUN ./mvnw clean package -DskipTests

# Start appen
CMD ["java", "-jar", "target/*.jar"]

