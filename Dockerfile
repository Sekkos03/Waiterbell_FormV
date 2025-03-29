# Bruk en offisiell Java image
FROM eclipse-temurin:17-jdk

# Sett arbeidskatalog i containeren
WORKDIR /app

# Kopier hele prosjektet inn i containeren
COPY backend/ .

# Bygg med Maven (skipper tester for raskere build)
RUN ./mvnw clean package -DskipTests

# Start appen med .jar-filen som ble bygd
CMD ["java", "-jar", "target/*.jar"]
