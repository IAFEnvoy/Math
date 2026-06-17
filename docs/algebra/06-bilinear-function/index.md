---
sidebar_position: 1
---

# 双线性函数

双线性函数是对两个变量都线性的函数，是内积的推广。双线性函数自然引出对偶空间、对偶基、辛空间等概念。

## 线性函数（线性泛函）

### 定义

设 $V$ 是数域 $P$ 上的线性空间。映射 $f: V \to P$ 若满足：

$$f(\alpha + \beta) = f(\alpha) + f(\beta), \quad f(k\alpha) = k f(\alpha)$$

则称 $f$ 为 $V$ 上的一个**线性函数**。

### 线性函数的表示

设 $\varepsilon_1, \ldots, \varepsilon_n$ 是 $V$ 的基。对任意 $\alpha = \sum x_i \varepsilon_i$：

$$f(\alpha) = \sum_{i=1}^{n} a_i x_i, \quad a_i = f(\varepsilon_i)$$

即线性函数由系数向量 $(a_1, \ldots, a_n)$ 唯一确定。

## 对偶空间

### 定义

$V$ 上全体线性函数构成的集合记作 $V^*$，在通常的函数加法和数乘下，$V^*$ 也是一个线性空间，称为 $V$ 的**对偶空间**。

$$\dim V^* = \dim V$$

### 对偶基

设 $\varepsilon_1, \ldots, \varepsilon_n$ 是 $V$ 的基。定义线性函数 $f_i \in V^*$：

$$f_i(\varepsilon_j) = \delta_{ij}$$

则 $f_1, \ldots, f_n$ 是 $V^*$ 的一基，称为 $\varepsilon_1, \ldots, \varepsilon_n$ 的**对偶基**。

## 双线性函数

### 定义

映射 $B: V \times V \to P$ 称为**双线性函数**，若它对两个变量都是线性的：

1. $B(k\alpha + l\beta, \gamma) = kB(\alpha, \gamma) + lB(\beta, \gamma)$
2. $B(\gamma, k\alpha + l\beta) = kB(\gamma, \alpha) + lB(\gamma, \beta)$

### 矩阵表示

在基 $\varepsilon_1, \ldots, \varepsilon_n$ 下，设 $A_{ij} = B(\varepsilon_i, \varepsilon_j)$。则对 $\alpha = \sum x_i \varepsilon_i$，$\beta = \sum y_j \varepsilon_j$：

$$B(\alpha, \beta) = \sum_{i=1}^{n} \sum_{j=1}^{n} A_{ij} x_i y_j = X^\top A Y$$

矩阵 $A$ 称为 $B$ 在基 $\varepsilon_1, \ldots, \varepsilon_n$ 下的**度量矩阵**。

### 基变换下度量矩阵的变换

若基变换的过渡矩阵为 $C$（新基 = 原基 $\cdot C$），则新度量矩阵：

$$A' = C^\top A C$$

这与二次型在合同变换下的变化规律一致。

## 双线性函数的分类

| 类型 | 条件 |
|---|---|
| **对称双线性函数** | $B(\alpha, \beta) = B(\beta, \alpha)$ |
| **反对称双线性函数** | $B(\alpha, \beta) = -B(\beta, \alpha)$ |
| **非退化** | 若 $B(\alpha, \beta) = 0$ 对任意 $\beta$ 成立，则 $\alpha = 0$ |

- 欧氏空间的内积 = **对称正定**双线性函数
- 辛内积 = **非退化反对称**双线性函数

## 辛空间

### 定义

带有**非退化反对称双线性函数**的线性空间称为**辛空间**（Symplectic Space）。

### 基本性质

1. 辛空间的维数必为**偶数**
2. 存在基使反对称度量矩阵为：

$$\left(\begin{array}{cc}
0 & I_k \\
-I_k & 0
\end{array}\right)$$

此基称为**辛基**。

3. 辛空间中保持辛内积的线性变换称为**辛变换**，其行列式为 $1$

### 辛空间的意义

辛空间是经典力学（哈密顿力学）的数学基础，也是现代辛几何和辛拓扑的出发点。
