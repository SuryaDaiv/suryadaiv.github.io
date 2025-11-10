import type { LanguageKey } from '../types';

export const TEMPLATES: Record<LanguageKey, string> = {
  c: `#include <stdio.h>
int main(){ char s[100]; fgets(s,100,stdin); printf("Hello C\n%s", s); return 0; }
`,
  cpp: `#include <bits/stdc++.h>
using namespace std;
int main(){ string s; getline(cin, s); cout << "Hello C++\n" << s; }
`,
  csharp: `using System; class Program { static void Main(){ Console.WriteLine("Hello C#"); Console.WriteLine(Console.In.ReadToEnd()); } }
`,
  java: `import java.util.*; class Main{ public static void main(String[] a){ Scanner sc=new Scanner(System.in); String s=sc.hasNextLine()?sc.nextLine():""; System.out.println("Hello Java"); System.out.println(s); } }
`,
  node: `const fs = require('fs'); 
const input = fs.readFileSync(0,'utf8'); 
console.log('Hello Node'); 
console.log(input);
`,
  typescript: `import fs from 'fs'; const input = fs.readFileSync(0,'utf8'); console.log('Hello TS'); console.log(input);
`,
  python: `import sys; print("Hello Python"); print(sys.stdin.read())
`,
  go: `package main; import ("fmt"; "io"; "os"); func main(){ b,_:=io.ReadAll(os.Stdin); fmt.Println("Hello Go"); fmt.Print(string(b)) }
`,
  ruby: `puts "Hello Ruby"; puts STDIN.read
`,
};

