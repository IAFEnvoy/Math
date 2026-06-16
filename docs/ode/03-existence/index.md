---
sidebar_position: 1
---

# 解的存在唯一性与延拓

存在唯一性定理和延拓定理是 ODE 的理论基石：前者保证了解的存在性和唯一性（在一定条件下），后者说明了解可以延拓到多远。

## 一阶方程的存在唯一性

### 初值问题

$$y' = f(x, y), \quad y(x_0) = y_0$$

### Picard-Lindelöf 定理

> **定理**：设 $f(x, y)$ 在矩形区域 $R = \{(x, y) \mid |x - x_0| \leq a, |y - y_0| \leq b\}$ 上连续，且对 $y$ 满足 **Lipschitz 条件**：
> $$|f(x, y_1) - f(x, y_2)| \leq L |y_1 - y_2|, \quad \forall (x, y_1), (x, y_2) \in R$$
>
> 则存在 $h > 0$，使初值问题在 $[x_0 - h, x_0 + h]$ 上存在**唯一**解。

### Lipschitz 条件的判定

实际检验时常用以下充分条件：

> 若 $\dfrac{\partial f}{\partial y}$ 在 $R$ 上连续，则 $f$ 对 $y$ 满足局部 Lipschitz 条件。

### 存在区间估计

$h = \min\!\left(a, \dfrac{b}{M}\right)$，其中 $M = \max_{(x, y) \in R} |f(x, y)|$。

### 例子：非 Lipschitz $\Rightarrow$ 解不唯一

$$y' = \sqrt{|y|}, \quad y(0) = 0$$

$f(x, y) = \sqrt{|y|}$ 在 $y = 0$ 处不满足 Lipschitz 条件。事实上，除零解 $y \equiv 0$ 外，还有：

$$y(x) = \begin{cases} 0, & x \leq c \\ \dfrac{(x-c)^2}{4}, & x > c \end{cases} \quad (c \geq 0)$$

无穷多个解！这显示了 Lipschitz 条件对唯一性的必要性。

## Picard 迭代法

Picard 存在唯一性定理的证明本身也是构造解的方法——**Picard 逐次逼近法**：

$$y_0(x) \equiv y_0, \qquad y_{n+1}(x) = y_0 + \int_{x_0}^{x} f(t, y_n(t))\,dt$$

序列 $\{y_n(x)\}$ 一致收敛到真解 $y(x)$。

## 解的延拓定理

>"解的延拓不会在有限区间内无故中断——它能一直延拓，直到触及边界或趋于无穷。"

> **定理**：设 $f(x, y)$ 在区域 $D \subseteq \mathbb{R}^2$ 上连续且对 $y$ 满足局部 Lipschitz 条件，$y = \varphi(x)$ 是初值问题在区间 $I$ 上的解。则 $\varphi$ 可延拓到**极大存在区间** $(\alpha, \beta)$，当 $x \to \alpha^+$ 或 $x \to \beta^-$ 时，$(x, \varphi(x))$ 必趋近于 $D$ 的边界，或 $\|\varphi(x)\| \to \infty$（爆炸）。

## 高阶与方程组的推广

### 高阶方程

$n$ 阶方程 $y^{(n)} = f(x, y, y', \ldots, y^{(n-1)})$ 可通过引入 $y_1 = y, y_2 = y', \ldots, y_n = y^{(n-1)}$ 化为一阶方程组。若 $f$ 对其后 $n$ 个变量满足 Lipschitz 条件，则存在唯一性定理成立。

### 线性方程组

对于线性方程组 $\mathbf{y}' = A(x)\mathbf{y} + \mathbf{b}(x)$，若 $A(x)$ 和 $\mathbf{b}(x)$ 在区间 $I$ 上连续，则解在整个 $I$ 上存在唯一（全局存在），无需延拓定理。

**提示**：线性 ODE 的一大优势——**解在系数连续的整个区间上全局存在**，不存在有限时间爆炸。

## 存在唯一性定理的重要意义

1. 保证我们算出的解是唯一的，不同方法得到同一解
2. 说明给定初值后，解完全确定（确定性）
3. 延拓定理告诉我们解"最多能走多远"
4. 为数值方法提供理论基础
