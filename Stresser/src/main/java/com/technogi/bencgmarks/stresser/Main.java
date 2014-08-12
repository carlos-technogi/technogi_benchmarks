/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.technogi.bencgmarks.stresser;

import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author carlos_technogi
 */
public class Main {
    
    private static final long seconds = 30;
    private static final int workers = 10;
    private static final int port = 3000;
    private static final String address = "localhost";
    private static final String apiPath = "benchmark";
    
    public static void main(String args[])throws Exception{
        
        List<Runner> runners = new LinkedList<>();
        
        for(int i = 0; i < workers; i ++){
            runners.add(new Runner(seconds*1000,port,address,apiPath+"/p1"));
        }
        
        for(Runner r: runners){
            r.start();
        }
        
        for(Runner r: runners){
            r.join();
        }
        System.out.println("p2");
        Runner.avg();
        
        runners.clear();
        
        for(int i = 0; i < workers; i ++){
            runners.add(new Runner(seconds*1000,port,address,apiPath+"/p2"));
        }
        
        for(Runner r: runners){
            r.start();
        }
        
        for(Runner r: runners){
            r.join();
        }
        System.out.println("p2");
        Runner.avg();
        
        System.out.println("p4");
        Runner.avg();
        
        runners.clear();
        
        for(int i = 0; i < workers; i ++){
            runners.add(new Runner(seconds*1000,port,address,apiPath+"/p4"));
        }
        
        for(Runner r: runners){
            r.start();
        }
        
        for(Runner r: runners){
            r.join();
        }
        System.out.println("p2");
        Runner.avg();
    }
}
