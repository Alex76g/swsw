package com.alex.explore;

import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.TreeMap;

public class Roller {

    private final int dieSides;
    private final Random r;

    private Roller(int dieSides) {
        this.dieSides = dieSides;
        r = new Random();
    }

    public static void main(String[] args) {
        Roller r = new Roller(8);
        Map<Integer, Integer> resultMap = new TreeMap<>();

        for (int i = 0; i < 100000; i++) {
            int roll = r.roll() + r.roll();
            int noOfAppearances = Optional.ofNullable(resultMap.get(roll)).orElse(0);
            resultMap.put(roll, noOfAppearances + 1);
        }

        for (Map.Entry<Integer, Integer> entry : resultMap.entrySet()) {
            System.out.println(String.format("%d: %d", entry.getKey(), entry.getValue()));
        }
    }

    private int roll() {
        return explosionRoll();
    }

    private int explosionRoll() {
        int sum = 0;
        int current;
        do {
            current = simpleRoll();
            sum += current;
        } while (current == dieSides);

        return sum;
    }

    private int simpleRoll() {
        return r.nextInt(dieSides) + 1;
    }
}
