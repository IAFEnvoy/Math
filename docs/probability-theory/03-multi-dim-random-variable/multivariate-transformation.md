---
sidebar_position: 5
---

# 多维变量函数的分布

求 $Z = g(X, Y)$ 的分布是多维随机变量的核心技能。对于和、积、商等常见形式有专门的卷积公式；一般情形可用分布函数法或变量变换法。

## 离散型

对离散型 $(X, Y)$，$Z = g(X, Y)$ 的分布列为：

$$P(Z = z) = \sum_{(x, y): g(x, y) = z} P(X = x, Y = y)$$

直接合并所有映射到相同 $z$ 值的 $(x, y)$ 的概率。

## 连续型：分布函数法

$$F_Z(z) = P(g(X, Y) \leq z) = \iint_{g(x, y) \leq z} f(x, y)\,dx\,dy$$

求导得密度：$f_Z(z) = F_Z'(z)$。

## 卷积公式（$Z = X + Y$）

当 $X$ 与 $Y$ **独立**时：

$$f_Z(z) = \int_{-\infty}^{\infty} f_X(x) \, f_Y(z - x)\,dx = \int_{-\infty}^{\infty} f_X(z - y) \, f_Y(y)\,dy$$

**直观理解**：固定 $x$，$Y = z - x$，遍历所有可能的 $x$ 并加权。

### 卷积的应用

- 两个独立正态变量之和仍为正态：$N(\mu_1, \sigma_1^2) + N(\mu_2, \sigma_2^2) = N(\mu_1+\mu_2, \sigma_1^2+\sigma_2^2)$
- 两个独立泊松变量之和仍为泊松：$P(\lambda_1) + P(\lambda_2) = P(\lambda_1+\lambda_2)$
- 两个独立伽马变量（同尺度参数）之和：$\Gamma(\alpha_1, \lambda) + \Gamma(\alpha_2, \lambda) = \Gamma(\alpha_1+\alpha_2, \lambda)$

## 积与商的分布

设 $X, Y$ 独立：

**$Z = XY$**（乘积）：

$$f_Z(z) = \int_{-\infty}^{\infty} \frac{1}{|x|} f_X(x) \, f_Y\!\left(\frac{z}{x}\right) dx$$

**$Z = X / Y$**（商）：

$$f_Z(z) = \int_{-\infty}^{\infty} |y| \, f_X(zy) \, f_Y(y)\,dy$$

## 变量变换法（雅可比行列式）

设变换 $(X, Y) \to (U, V)$，其中 $U = g_1(X, Y), V = g_2(X, Y)$ 是一一变换。反解出 $X = h_1(U, V), Y = h_2(U, V)$，则 $(U, V)$ 的联合密度为：

$$f_{UV}(u, v) = f_{XY}(h_1(u, v), h_2(u, v)) \cdot |J|$$

其中 **雅可比行列式**：

$$J = \det\!\begin{pmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\[2pt] \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{pmatrix}$$

**记忆**：新密度 = 旧密度 $\times$ 雅可比行列式的绝对值。

### 举例：极坐标变换

$X = R\cos\Theta, Y = R\sin\Theta$，雅可比行列式 $J = r$（反变换的 $|J| = 1/r$）：

$$f_{R\Theta}(r, \theta) = f_{XY}(r\cos\theta, r\sin\theta) \cdot r$$

如 $X, Y$ 独立标准正态，则 $R = \sqrt{X^2 + Y^2}$ 服从瑞利分布。

## 最大值与最小值的分布

设 $X_1, \ldots, X_n$ **独立同分布**，分布函数为 $F$。

### 最大值

$$F_{\max}(z) = P(\max \leq z) = P(X_1 \leq z, \ldots, X_n \leq z) = [F(z)]^n$$

$$f_{\max}(z) = n [F(z)]^{n-1} f(z)$$

### 最小值

$$F_{\min}(z) = P(\min \leq z) = 1 - P(\min > z) = 1 - [1 - F(z)]^n$$

$$f_{\min}(z) = n [1 - F(z)]^{n-1} f(z)$$

### 次序统计量

第 $k$ 个次序统计量 $X_{(k)}$ 的密度：

$$f_{X_{(k)}}(x) = \frac{n!}{(k-1)!(n-k)!} [F(x)]^{k-1} [1-F(x)]^{n-k} f(x)$$
