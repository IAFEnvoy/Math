---
sidebar_position: 2
---

# 基解矩阵与齐次通解

## 线性方程组的标准形式

一阶线性齐次方程组：

$$X' = A(t) X$$

其中 $X(t) \in \mathbb{R}^n$（或 $\mathbb{C}^n$），$A(t)$ 为 $n \times n$ 矩阵函数，在区间 $I$ 上连续。

**任何高阶方程都可化为一阶方程组**：$y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_0 y = 0$ 可写为一阶方程组。

## 解空间的结构

> **定理**：$n$ 阶齐次线性方程组 $X' = A(t)X$ 的所有解构成一个 $n$ 维线性空间。

因此，只需找到 $n$ 个线性无关的解，其任意线性组合就是通解。

## 基解矩阵

### 定义

$n \times n$ 矩阵 $\Phi(t)$ 称为 $X' = A(t)X$ 的**基解矩阵**（Fundamental Matrix），若：

1. $\Phi(t)$ 的每一列都是方程组的解
2. $\Phi(t)$ 的列向量线性无关（等价于 $\det \Phi(t) \neq 0$）

**齐次通解 = 基解矩阵 × 常向量**：
$$X(t) = \Phi(t) \cdot C, \quad C = (C_1, C_2, \ldots, C_n)^\top \in \mathbb{R}^n$$

### Wronskian（朗斯基行列式）

$$W(t) = \det \Phi(t)$$

> **Liouville 公式（Abel 恒等式）**：
> $$W(t) = W(t_0) \exp\!\left(\int_{t_0}^{t} \operatorname{tr} A(s)\,ds\right)$$

由此可知：$W(t) \neq 0$ 恒成立当且仅当 $W(t_0) \neq 0$。朗斯基行列式要么恒为零，要么恒不为零。

## 常系数线性方程组

当 $A$ 为常数矩阵时，$X' = AX$ 的解可由矩阵指数表示。

### 矩阵指数

$$e^{At} = \sum_{k=0}^{\infty} \frac{(At)^k}{k!} = I + At + \frac{A^2 t^2}{2!} + \cdots$$

**基本性质**：

| 性质 | 公式 |
|---|---|
| 导数 | $\dfrac{d}{dt}e^{At} = A e^{At}$ |
| 乘法 | $e^{A(t+s)} = e^{At}e^{As}$（当且仅当 $AB = BA$ 时 $e^{A+B} = e^A e^B$） |
| 逆 | $(e^{At})^{-1} = e^{-At}$ |

### 基解矩阵 $\Phi(t) = e^{At}$

- $\Phi(0) = I$
- $\Phi(t)$ 是标准基解矩阵（在 $t = 0$ 处取单位阵）
- 齐次通解：$X(t) = e^{At} \cdot C$
- 初值问题 $X(0) = X_0$ 的解：$X(t) = e^{At} X_0$

### 矩阵指数的计算

#### 方法一：对角化

若 $A = P D P^{-1}$（$D$ 为对角阵），则：

$$e^{At} = P \, e^{Dt} \, P^{-1} = P \begin{pmatrix} e^{\lambda_1 t} & & \\ & \ddots & \\ & & e^{\lambda_n t} \end{pmatrix} P^{-1}$$

#### 方法二：Jordan 标准形

若 $A$ 不可对角化，将其化为 Jordan 标准形 $J = P^{-1}AP$，则 $e^{At} = P e^{Jt} P^{-1}$。

#### 方法三：特征值-特征向量法

最实用的方法：

1. 求 $A$ 的特征值 $\lambda_1, \ldots, \lambda_n$
2. 对每个 $\lambda_i$，求特征向量 $\mathbf{v}_i$（实特征值）或取实部/虚部（复特征值）
3. 构造基解：$e^{\lambda_i t}\mathbf{v}_i$（实根），$e^{\alpha t}(\cos \beta t \, \mathbf{u} - \sin \beta t \, \mathbf{w})$ 等（复根）
4. 对重根，引入 $t e^{\lambda t}, t^2 e^{\lambda t}, \ldots$ 项（广义特征向量）

### 举例

求解 $X' = \begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix} X$。

特征值：$\det(A - \lambda I) = \lambda^2 - 2\lambda - 3 = 0 \Rightarrow \lambda_1 = 3, \lambda_2 = -1$。

特征向量：
- $\lambda_1 = 3$：$\mathbf{v}_1 = (1, 2)^\top$
- $\lambda_2 = -1$：$\mathbf{v}_2 = (1, -2)^\top$

基解矩阵：

$$\Phi(t) = \begin{pmatrix} e^{3t} & e^{-t} \\ 2e^{3t} & -2e^{-t} \end{pmatrix}$$

通解：$X(t) = C_1 \begin{pmatrix} 1 \\ 2 \end{pmatrix} e^{3t} + C_2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} e^{-t}$。
