/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.technogi.bencgmarks.stresser;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

/**
 *
 * @author carlos_technogi
 */
public class Runner extends Thread {

    private static long totals = 0;
    private static long totalTime = 0;
    private long startTime;
    private final long timeToRun;
    private final int port;
    private final String address;
    private final String apiPath;

    
    public Runner(long timeToRun, int port, String address, String apiPath) {
        this.timeToRun = timeToRun;
        this.port = port;
        this.address = address;
        this.apiPath = apiPath;
    }

    
    private synchronized static void sum(long time) {
        totals++;
        totalTime += time;
    }

    public static void avg() {
        System.out.println("avg " + (totalTime / totals) + "ms.");
        totals = 0;
        totalTime = 0;
    }

    @Override
    public void run() {
        this.startTime = System.currentTimeMillis();
        while (this.startTime + timeToRun > System.currentTimeMillis()) {
            long start = System.currentTimeMillis();
            //System.out.println("Running " + Thread.currentThread().getName());
            HttpClient client = new DefaultHttpClient();
            HttpResponse resp;
            try {
                resp = client.execute(new HttpGet("http://"+this.address+":"+this.port+"/"+this.apiPath));
            } catch (IOException ex) {
                Logger.getLogger(Runner.class.getName()).log(Level.SEVERE, null, ex);
                continue;
            }
            BufferedReader rd;
            try {
                rd = new BufferedReader(
                        new InputStreamReader(resp.getEntity().getContent()));
            } catch (IOException | IllegalStateException ex) {
                Logger.getLogger(Runner.class.getName()).log(Level.SEVERE, null, ex);
                continue;
            }
            StringBuilder result = new StringBuilder();
            String line;
            try {
                while ((line = rd.readLine()) != null) {
                    result.append(line);
                }
            } catch (IOException ex) {
                Logger.getLogger(Runner.class.getName()).log(Level.SEVERE, null, ex);
                continue;
            }
            //System.out.println((System.currentTimeMillis() - start) + "ms.");
            
            sum(System.currentTimeMillis() - start);
        }

    }
    
    private void p1() throws Exception{
    }
    
    private void p2() throws Exception{
        
    }
    
    private void p3() throws Exception{
        
    }
    
    private void p4() throws Exception{
        
    }

}
