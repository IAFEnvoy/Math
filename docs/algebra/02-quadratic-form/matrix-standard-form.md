---
sidebar_position: 2
---

# 矩阵表示与标准形

## 二次型的矩阵表示

### 定义

$n$ 元**二次型**是形如

$$f(x_1, \ldots, x_n) = \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j$$

的齐次二次多项式。写成矩阵形式：

$$f = X^\top A X, \quad X = \left(\begin{array}{c} x_1 \\ \vdots \\ x_n \end{array}\right)$$

其中 $A = (a_{ij})$ 为 $n \times n$ **对称矩阵**。

### 矩阵的唯一性

每个二次型对应**唯一**的对称矩阵 $A$。$A$ 的元素为：

- $a_{ii}$ = $x_i^2$ 的系数
- $a_{ij} = a_{ji}$ = $\dfrac{x_i x_j\text{ 的系数}}{2}$

### 非退化二次型

若 $\det A \neq 0$（即 $A$ 可逆），称二次型为**非退化**的。否则为退化二次型。

## 线性替换

设 $X = CY$（$C$ 为 $n \times n$ 可逆矩阵），则

$$f = X^\top A X = Y^\top (C^\top A C) Y$$

新矩阵 $B = C^\top A C$。两个矩阵 $A, B$ 若满足 $B = C^\top A C$（$C$ 可逆），则称 $A$ 与 $B$ **合同**。

**合同不变量**：秩（$\operatorname{rank} A$ 在合同变换下不变）。

## 化二次型为标准形

**标准形**：只含平方项的二次型

$$f = d_1 y_1^2 + d_2 y_2^2 + \cdots + d_r y_r^2, \quad r = \operatorname{rank} A$$

### 方法一：配方法

通过线性替换逐步消去交叉项。核心步骤：

1. 若有平方项 $a_{ii} \neq 0$：对该变量配方
2. 若所有平方项系数为 $0$ 但有交叉项 $a_{ij} \neq 0$：先做替换 $x_i = y_i + y_j$，$x_j = y_i - y_j$ 产生平方项

### 方法二：正交变换法

若 $A$ 是**实对称矩阵**（二次型总是实对称的），可通过**正交变换** $X = QY$（$Q^\top Q = I$）对角化：

$$Q^\top A Q = \operatorname{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$$

标准形：

$$f = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \cdots + \lambda_n y_n^2$$

优点：正交变换保持几何性质（保持向量长度和夹角）。

### 举例

化 $f(x_1, x_2) = 2x_1^2 + 2x_2^2 + 2x_1 x_2$ 为标准形。

$$A = \left(\begin{array}{cc} 2 & 1 \\ 1 & 2 \end{array}\right)$$

**配方法**：

$f = 2x_1^2 + 2x_2^2 + 2x_1 x_2 = 2\left(x_1 + \frac{x_2}{2}\right)^2 + \frac{3}{2}x_2^2$

令 $y_1 = x_1 + \frac{x_2}{2}$，$y_2 = x_2$，得 $f = 2y_1^2 + \frac{3}{2}y_2^2$。

**正交变换法**：$A$ 的特征值为 $\lambda_1 = 3, \lambda_2 = 1$，$f = 3y_1^2 + y_2^2$。

两个结果都是标准形（系数可以不同，但正负号个数一致——惯性定理）。
