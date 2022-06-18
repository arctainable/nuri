package com.nuri.convert;

import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Array;
import java.util.*;

public class Convert {
    static ArrayList<String> convertCode;
    static public ArrayList<String> lexical(String userCode){
        StringTokenizer tokens = new StringTokenizer(userCode, " :.<>(){};+-*/\n", true);
        convertCode = new ArrayList<>();
        convertCode.add("import java.util.*;\n\n");
        convertCode.add("public class Main {\n");
        convertCode.add("   public static void main(String[] args) {\n");
        convertCode.add("       ");
        convertCode.add("Scanner 입력해요 = new Scanner(System.in); // 입력이 필요할때 사용\n");
        convertCode.add("       ");
        while(tokens.hasMoreTokens()) {
            String token = tokens.nextToken();
            switch (token) {
                case "정수":
                    convertCode.add("int");
                    break;
                case "소수":
                    convertCode.add("double");
                    break;
                case "문자":
                    convertCode.add("String");
                    break;
                case "정수들":
                    convertArrays(tokens, "int");
                    break;
                case "문자들":
                    convertArrays(tokens, "String");
                    break;
                case "소수들":
                    convertArrays(tokens, "double");
                    break;
                case "참거짓":
                    convertCode.add("boolean");
                    break;
                case "참거짓들":
                    convertArrays(tokens, "boolean");
                    break;
                case "쌓기":
                    convertUtils(tokens, "Stack");
                    break;
                case "줄세우기":
                    convertUtils(tokens, "Queue");
                    break;
                case "묶음":
                    convertUtils(tokens, "List");
                    break;
                case "구간반복":
                    convertFor(tokens);
                    break;
                case "조건반복":
                    convertCode.add("while");
                    break;
                case "만약":
                    convertCode.add("if");
                    break;
                case "아니면":
                    convertCode.add("else");
                    break;
                case "무작위":
                    convertRandom(tokens);
                    break;
                case "최대":
                    convertCode.add("Math.max");
                    break;
                case "최소":
                    convertCode.add("Math.min");
                    break;
                case "출력":
                    convertCode.add("System.out.println");
                    break;
                case "상황":
                    convertCode.add("switch");
                    break;
                case "선택":
                    convertCode.add("case");
                    break;
                case "멈춤":
                    convertCode.add("break");
                    break;
                case "기본":
                    convertCode.add("default");
                    break;
                case "정수입력":
                    convertCode.add("nextInt()");
                    break;
                case "참":
                    convertCode.add("true");
                    break;
                case "쌓아넣기":
                    convertCode.add("add");
                    break;
                case "빼기":
                    convertCode.add("pop");
                    break;
                case "세우기":
                    convertCode.add("offer");
                    break;
                case "줄빼기":
                    convertCode.add("poll");
                    break;
                case "거짓":
                    convertCode.add("false");
                    break;
                case "넣기":
                    convertCode.add("add");
                    break;
                case "가져오기":
                    convertCode.add("get");
                    break;
                default:
                    if(token.equals("\r")){
                        break;
                    }else if(token.equals("\n") || token.equals("\r\n")){
                        convertCode.add(token);
                        convertCode.add("       ");
                    }else{
                        convertCode.add(token);
                    }
                    break;
            }
        }

        convertCode.add("\n   }\n");
        convertCode.add("}");

        return convertCode;
    }

    private static void convertRandom(StringTokenizer tokens) {
        convertCode.add("(");
        convertCode.add("int");
        convertCode.add(")");
        convertCode.add("(");
        convertCode.add("Math");
        convertCode.add(".");
        convertCode.add("random");

        for(int i=0; i<4; i++){
            convertCode.add(tokens.nextToken());
        }
        convertCode.add(")");
        for(int i=0; i<4; i++){
            convertCode.add(tokens.nextToken());
        }

    }

    private static void convertUtils(StringTokenizer tokens, String structure) {
        convertCode.add(structure);
        convertCode.add(tokens.nextToken());
        String type = "";
        switch (tokens.nextToken()) {
            case "정수":
                type = "Integer";
                break;
            case "소수":
                type = "Double";
                break;
            case "문자":
                type = "String";
                break;
        }
        convertCode.add(type);
        convertCode.add(tokens.nextToken());
        convertCode.add(tokens.nextToken());
        convertCode.add(tokens.nextToken());
        convertCode.add(" ");
        convertCode.add("=");
        convertCode.add(" ");
        convertCode.add("new");
        convertCode.add(" ");
        if(structure.equals("Stack")){
            convertCode.add(structure);
        }else if(structure.equals("Queue")){
            convertCode.add("LinkedList");
        }else if(structure.equals("List")){
            convertCode.add("ArrayList");
        }

        convertCode.add("<");
        convertCode.add(">");
        convertCode.add("(");
        convertCode.add(")");
    }

    private static void convertArrays(StringTokenizer tokens, String type) {
        convertCode.add(type+"[]");
        convertCode.add(tokens.nextToken());
        String token = tokens.nextToken();
        int start = token.indexOf('[');
        int end = token.indexOf(']');
        String val = token.substring(0,start);
        String size = token.substring(start+1, end);

        convertCode.add(val);
        convertCode.add(" ");
        convertCode.add("=");
        convertCode.add(" ");
        convertCode.add("new");
        convertCode.add(" ");
        convertCode.add(type);
        convertCode.add("[");
        convertCode.add(size);
        convertCode.add("]");
    }

    private static void convertFor(StringTokenizer tokens) {
        convertCode.add("for");
        while(tokens.hasMoreTokens()){
            String token = tokens.nextToken();

            if(token.equals(" ") || token.equals("(")){
                convertCode.add(token);
            }else if(token.equals(")")){
                convertCode.add(token);
                break;
            }else{
                String[] val = token.split("=|,");
                System.out.println(val[0]);
                System.out.println(val[1]);
                System.out.println(val[2]);
                convertCode.add("int");
                convertCode.add(" ");
                convertCode.add(val[0]);
                convertCode.add("=");
                convertCode.add(val[1]);
                convertCode.add(";");
                convertCode.add(" ");
                convertCode.add(val[0]);
                convertCode.add("<");
                convertCode.add(val[2]);
                convertCode.add(";");
                convertCode.add(" ");
                convertCode.add(val[0]);
                convertCode.add("++");
            }
        }
    }
}
