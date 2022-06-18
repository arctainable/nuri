import java.util.Random;
import java.util.Scanner;

public class test2 {
    public static void main(String []args){
        Scanner sc = new Scanner(System.in);
		Random r = new Random();
            // 실제 게임 로직 작성
        System.out.println("<<< Game Start >>>");
        int count = 0;
        while (true) {
            System.out.println("<< your Turn >>");
            System.out.print("Input Number(1~3) : ");
            int uNum = 2;
            for (int i = 0; i < uNum; i++) {
                count++;
                System.out.println((count) + "!");
                if (count == 31) {
                    System.out.println("패배");
                }
            }
            
            if (count >= 31) {
                break;
            }
            System.out.println("<< Computer Turn >>");
            int cNum = r.nextInt(3) + 1;
            for (int i = 0; i < cNum; i++) {
                count++;
                System.out.println((count) + "!");
                if (count == 31) {
                    System.out.println("승리");
                    break;
                }
            }
            if (count >= 31) {
                break;
            }
        }
	}
}