package com.kasun;
import java.io.File;  // Import the File class
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("OBD.txt");
        Scanner myReader = new Scanner(file);

        while (myReader.hasNextLine()) {
            System.out.println(myReader.nextLine());
        }
    }

}

