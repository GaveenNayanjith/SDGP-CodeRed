package com.kasun;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main implements Load {


    public static void main(String[] args) {
        List<LoadData> LoadData = new ArrayList<>();
    }
        @Override
        public void LoadData() {

            BufferedReader Reader = null;
            try {
                Reader = new BufferedReader(new FileReader("OBD.txt"));
                String data;

                while ((data = Reader.readLine()) != null) {
                    System.out.println(data);
                }
            } catch (IOException save) {
                save.printStackTrace();
            }
            try {
                Reader.close();
            } catch (IOException save) {
                System.out.println("There was an error (!)");
                save.printStackTrace();
            }


        }
	// write your code here
    }


