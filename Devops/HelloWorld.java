public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // If a parameter is provided, print it
        if (args.length > 0) {
            System.out.println("Parameter from Jenkins: " + args[0]);
        }
    }
}