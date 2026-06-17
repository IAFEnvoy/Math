---
sidebar_position: 3
---

# Jordan 标准形

Jordan 标准形是复矩阵在相似意义下的最简形式——任何复方阵都相似于一个由 Jordan 块组成的分块对角阵。

## Jordan 块

$k$ 阶 **Jordan 块**（对应特征值 $\lambda_0$）：

$$
J_k(\lambda_0) = \left(\begin{array}{cccc}
\lambda_0 & 1 & & \\
& \lambda_0 & \ddots & \\
& & \ddots & 1 \\
& & & \lambda_0
\end{array}\right)_{k \times k}
$$

即对角线为 $\lambda_0$，上次对角线全为 $1$，其余位置均为 $0$。

## Jordan 标准形定理

> **定理**：任何 $n$ 阶复矩阵 $A$ 都相似于一个唯一的 Jordan 标准形（不计 Jordan 块的排列顺序），即：
> $$A \sim J = \left(\begin{array}{ccc} J_{k_1}(\lambda_1) & & \\ & \ddots & \\ & & J_{k_s}(\lambda_s) \end{array}\right)$$

唯一性意味着：Jordan 标准形的 Jordan 块完全由 $A$ 的相似不变量——初等因子——决定。

## Jordan 块的几何意义

一个 $k$ 阶 Jordan 块 $J_k(\lambda_0)$ 对应于一个**循环子空间**。该子空间中存在向量 $\alpha$，使：

$$(\sigma - \lambda_0 \mathcal{I})\alpha \neq 0, (\sigma - \lambda_0 \mathcal{I})^2\alpha \neq 0, \ldots, (\sigma - \lambda_0 \mathcal{I})^k\alpha = 0$$

向量组 $\alpha, (\sigma - \lambda_0 \mathcal{I})\alpha, \ldots, (\sigma - \lambda_0 \mathcal{I})^{k-1}\alpha$ 构成该循环子空间的一组基（Jordan 基）。

## 如何求 Jordan 标准形

### 方法一：通过特征值与几何重数

1. 求 $A$ 的特征值 $\lambda_i$
2. 对每个 $\lambda_i$，计算其特征子空间的维数 $\dim V_{\lambda_i}$（几何重数）
3. 计算各阶幂零空间的维数：$d_k = \dim \ker(A - \lambda_i I)^k$
4. $k$ 阶 Jordan 块的个数 $= d_k - d_{k-1}$

### 方法二：通过初等因子（推荐）

详见 [λ-矩阵与初等因子](../lambda-matrix/) 章节。核心结论：

> **$A$ 的 Jordan 标准形的 Jordan 块由 $A$ 的特征矩阵 $\lambda I - A$ 的初等因子唯一确定**：每个初等因子 $(\lambda - \lambda_0)^k$ 对应一个 $k$ 阶 Jordan 块 $J_k(\lambda_0)$。

## 举例

求 $A = \left(\begin{array}{ccc} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{array}\right)$ 的 Jordan 标准形。

特征值 $\lambda = 2$（三重）。$\dim V_2 = 1$（几何重数 = 1）。$A$ 自成一个 3 阶 Jordan 块：

$$J = J_3(2) = \left(\begin{array}{ccc} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{array}\right)$$

## 可对角化的条件

以下等价：
1. $A$ 可对角化（即 Jordan 块全为 1 阶）
2. 几何重数 = 代数重数（对每个特征值）
3. **最小多项式无重根**
4. $A$ 有 $n$ 个线性无关的特征向量

## 幂零矩阵的 Jordan 形

若 $A$ 是幂零矩阵（$A^k = 0$），则所有特征值为 $0$，Jordan 标准形对角线全为 $0$，仅上次对角线上有若干个 $1$（即 Jordan 块）。
