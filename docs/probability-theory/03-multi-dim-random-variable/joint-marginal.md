---
sidebar_position: 2
---

# 联合分布与边际分布

## 联合分布函数

二维随机变量 $(X, Y)$ 的**联合分布函数**：

$$F(x, y) = P(X \leq x, Y \leq y), \quad (x, y) \in \mathbb{R}^2$$

### 性质

1. **单调性**：$F$ 对每个变元单调不减
2. **有界性**：$F(-\infty, y) = F(x, -\infty) = 0$，$F(+\infty, +\infty) = 1$
3. **右连续性**：$F$ 对每个变元右连续
4. **矩形概率非负**：$P(a < X \leq b, c < Y \leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c) \geq 0$

## 离散型：联合分布列

$$p_{ij} = P(X = x_i, Y = y_j), \quad i, j = 1, 2, \ldots$$

满足 $p_{ij} \geq 0$，且 $\sum_{i,j} p_{ij} = 1$。

### 边际分布列

对另一变量求和（或积分）消去：

$$P(X = x_i) = p_{i\cdot} = \sum_{j} p_{ij}, \qquad P(Y = y_j) = p_{\cdot j} = \sum_{i} p_{ij}$$

## 连续型：联合密度

若存在非负函数 $f(x, y) \geq 0$，使：

$$F(x, y) = \int_{-\infty}^{x} \int_{-\infty}^{y} f(u, v)\,dv\,du$$

则称 $(X, Y)$ 为连续型，$f(x, y)$ 为其**联合概率密度**。

### 性质

1. $f(x, y) \geq 0$
2. $\iint_{\mathbb{R}^2} f(x, y)\,dx\,dy = 1$
3. 在 $f$ 的连续点：$\dfrac{\partial^2 F}{\partial x \partial y} = f(x, y)$
4. 区域概率：$P((X, Y) \in D) = \iint_D f(x, y)\,dx\,dy$

### 边际密度

$$f_X(x) = \int_{-\infty}^{\infty} f(x, y)\,dy, \qquad f_Y(y) = \int_{-\infty}^{\infty} f(x, y)\,dx$$

**重要**：边际分布由联合分布唯一确定，但反之不然——不同的联合分布可以有相同的边际。

## 独立性判定

> **定理**：$X$ 与 $Y$ 相互独立 $\iff$ 联合分布函数等于边际分布函数的乘积：
> $$F(x, y) = F_X(x) \cdot F_Y(y), \quad \forall x, y$$

等价形式：

- **离散型**：$p_{ij} = p_{i\cdot} \cdot p_{\cdot j}$，对所有 $i, j$
- **连续型**：$f(x, y) = f_X(x) \cdot f_Y(y)$（几乎处处成立）

### 独立性的结构

若 $X \perp\!\!\!\perp Y$，则联合分布完全由边际分布决定。对于连续型，"独立"等价于联合密度可分解为 $x$ 的函数与 $y$ 的函数的乘积。

## 多元正态分布

$(X_1, \ldots, X_n)$ 服从 **$n$ 元正态分布**的关键性质：

1. 任意线性组合 $\sum a_i X_i$ 均为一元正态
2. 各分量相互独立 $\iff$ 两两不相关（协方差为零）
3. 边际分布仍为正态分布
4. 条件分布仍为正态分布
