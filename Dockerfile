FROM openjdk:8-jdk-alpine
ADD target/Gateway-0.0.1-SNAPSHOT.jar /Gateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "Gateway-0.0.1-SNAPSHOT.jar"]